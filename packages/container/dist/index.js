import{BaseException as e}from"@swindle/core";
/**
 * ContainerException
 *
 * The base exception class.
 */class s extends e{constructor(e="Container Error"){super(e)}}
/**
 * CircularDependencyException
 */class t extends s{constructor(e="Circular Dependency Detected"){super(e)}}
/**
 * DependencyNotFoundException
 *
 * DependencyNotFoundException indicates that a dependency was not found.
 */class n extends s{constructor(e="Dependency not found."){super(e)}}
/**
 * DuplicateBindingException
 *
 * An error indicating a duplicate binding.
 */class i extends s{constructor(e="Duplicate Binding"){super(e)}}
/**
 * DuplicateDependencyException
 *
 * DuplicateDependencyException indicates that there is a duplicate dependency in the container.
 */class r extends s{constructor(e="Duplicate Dependency"){super(e)}}
/**
 * DuplicateModuleException
 */class o extends s{constructor(e="Duplicate Module"){super(e)}}
/**
 * InvalidModuleException
 */class a extends s{constructor(e="Invalid Module"){super(e)}}
/**
 * ModuleNotFoundException
 */class d extends s{constructor(e="Module not found"){super(e)}}class h{
/**
     * hasSubmodule()
     *
     * hasSubmodule() determines if the path has submodules.
     * @param modulePath the module path in question.
     * @throws InvalidModuleException when the module path cannot be parsed.
     */
hasSubmodules(e){if(!this.canParse(e))throw new a;try{return this.parse(e).length>1}catch(e){return!1}}
/**
     * parse()
     *
     * parses the module name.
     * @param modulePath the module name.
     * @throws InvalidModuleException
     */parse(e){if(this.canParse(e))return e.split(this.delimiter()).filter((e=>e.length>0));throw new a}
/**
     * root()
     *
     * root() gets the root of the module.
     * @param modulePath the path of the module.
     * @throws InvalidModuleException when the modulePath cannot be parsed.
     */root(e){if(this.canParse(e)){const s=e.includes(this.delimiter())?e.indexOf(this.delimiter()):e.length;return e.substring(0,s)}throw new a}
/**
     * submodules()
     *
     * gets the submodules name.
     * @param modulePath the name of the module
     * @throws InvalidModuleException when the modulePath cannot be parsed.
     */submodules(e){if(this.canParse(e)){if(e.length>0&&e.includes(this.delimiter())){const s=this.root(e).length+1;return e.substring(s)}return""}throw new a}}
/**
 * DefaultModuleParser
 *
 * The default module parser.
 */class u extends h{constructor(){super()}
/**
     * canParse()
     *
     * canParse() determines if the module name can be parsed.
     * @param path the name of the module.
     */canParse(e){return new RegExp("^[A-Za-z0-9._-]+$").test(e)}
/**
     * delimiter()
     *
     * delimiter() gets the delimiter of the parser.
     * @returns the delimiter to use to parse modules.
     */delimiter(){return"."}}
/**
 * VerdicContainer
 *
 * A simple Dependency Container.
 */class c{constructor(e=new u){this.instances=new Map,this.bindings=new Map,this.modules=new Map,this.instanciationMap=new Set,this.moduleParser=e}
/**
     * bind()
     *
     * bind() is an alias of bindFactory().
     * @param token the token to assign to the binding.
     * @param factory the factory.
     * @throws DuplicateBindingException when attempting to add a duplicate binding.
     */bind(e,s){this.bindFactory(e,s)}
/**
     * bindFactory()
     *
     * bindFactory() binds the token to the factory.
     * @param token the token to assign to the binding.
     * @param factory the factory.
     * @throws DuplicateBindingException when attempting to add a duplicate binding.
     */bindFactory(e,s){
// get the name of the dependency
const t=this.getDependencyIdFromToken(e);if(this.bindings.has(t))
// there is already an existing binding
throw new i(`Binding for '${t}' already exists.`);
// create the binding
this.bindings.set(t,s)}
/**
     * bindInstance()
     *
     * bindInstance() creates mapping in the container between .
     * @param token: The token of the binding.
     * @param instance The instance to to bind to the token.
     */bindInstance(e,s){if(this.has(e))
// duplicate insertion.
throw new r(`Binding for '${this.getDependencyIdFromToken(e)}' already exists.`);
// add the dependency
this.instances.set(this.getDependencyIdFromToken(e),s)}
/**
     * containsModule()
     *
     * determines if the module exists.
     * @param path the path of the module to check for.
     * @returns TRUE if the container contains the module. FALSE otherwise.
     */containsModule(e){
//return this.modules.has(path);
const s=this.parser().root(e);return this.parser().hasSubmodules(e)?this.module(s).containsModule(this.parser().submodules(e)):this.modules.has(s)}
/**
     * createModule()
     *
     * creates a module.
     * @param modulePath the path of the module.
     * @throws DuplicateModuleException when attempting to create a duplicate module.
     * @throws InvalidModuleException when the module path cannot be parsed.
     */createModule(e){const s=this.parser().root(e);if(this.containsModule(s)){if(!this.parser().hasSubmodules(e))throw new o(`Module '${e}' already in use.`)}else this.modules.set(s,new c(this.moduleParser));
// if there are submodules, create them
this.parser().hasSubmodules(e)&&this.module(s).createModule(this.parser().submodules(e))}
/**
     * get()
     *
     * gets the dependency associated with the provided token.
     * @param token the dependency to get.
     * @throws DependencyNotFoundException when the dependency cannot be found.
     * @throws CircularDependencyException when a circular dependency is detected.
     */get(e){const s=this.getDependencyIdFromToken(e);if(this.instanciationMap.has(s))
// there is a circular dependency
throw new t;
// check for instances
if(this.instanciationMap.add(s),!this.hasInstance(e)){
// there is no instance yet.
// check if there is a binding
if(!this.hasBinding(e))
// There is no instance or factory.
throw this.instanciationMap.clear(),new n(`Cannot find dependency '${s}'`);{
// create an instance.
const e=this.bindings.get(s)(this);this.instances.set(s,e)}}return this.instanciationMap.delete(s),this.instances.get(s)}
/**
     * has()
     *
     * has() determines whether the dependency exists in the container.
     * @param token the token of the dependency to test for.
     * @returns true if the dependency is found in the container. False otherwise.
     */has(e){return this.hasInstance(e)||this.hasBinding(e)}
/**
     * hasBinding()
     *
     * hasBinding() determines if the container has a binding for the specified dependency.
     * @param token the token of the dependnecy to check for.
     * @returns TRUE if the binding exists. FALSE otherwise.
     */hasBinding(e){return this.bindings.has(this.getDependencyIdFromToken(e))}
/**
     * hasInstance()
     *
     * hasInstance() determines if the container has an instance for the specified dependency.
     * @param token the token of the dependnecy to check for.
     * @returns TRUE if the instance exists. FALSE otherwise.
     */hasInstance(e){return this.instances.has(this.getDependencyIdFromToken(e))}
/**
     * module()
     *
     * gets a module.
     * @param path the path of the module to get.
     * @throws ModuleNotFoundException when the module cannot be found.
     * @throws InvalidModuleException when the module path cannot be parsed
     */module(e){const s=this.moduleParser.root(e);if(this.parser().hasSubmodules(e))
// look at the submodules
return this.module(s).module(this.moduleParser.submodules(e));
// the desired module is a direct submodule of the current module.
if(this.containsModule(s))return this.modules.get(s);
// the domule does not exist.
throw new d(`Cannot find Module '${e}'`)}
/**
     * parser()
     *
     * gets the parser that is used by the container.
     */parser(){return this.moduleParser}
// ===========================
// Helper methods
// ===========================
/**
     * getDependencyIdFromToken()
     *
     * gets the id of the dependency from the dependency token.
     * @param toekn The token to derive the id from.
     * @returns the id of the dependency.
     */
getDependencyIdFromToken(e){return e.name}}export{t as CircularDependencyException,c as Container,s as ContainerException,u as DefaultModuleParser,n as DependencyNotFoundException,i as DuplicateBindingException,r as DuplicateDependencyException,o as DuplicateModuleException,a as InvalidModuleException,d as ModuleNotFoundException,h as ModuleParser};
