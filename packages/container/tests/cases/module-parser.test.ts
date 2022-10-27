import { InvalidModuleException, DefaultModuleParser } from '../../index';

const parser = new DefaultModuleParser();

test("Testing canParse() function", () => {
    expect(parser.canParse('module')).toEqual(true);
    expect(parser.canParse('')).toEqual(false);
    expect(parser.canParse('module.foo')).toEqual(true);
    expect(parser.canParse('module1')).toEqual(true);
    expect(parser.canParse('module&')).toEqual(false);
    expect(parser.canParse('foo_bar')).toEqual(true);
    expect(parser.canParse('module-foo')).toEqual(true);
});

test("Test the delimiter() function", () => {
    expect(parser.delimiter()).toEqual('.');
});

test("Test the hasSubmodules() method", () => {
    expect(() => parser.hasSubmodules('')).toThrow(InvalidModuleException);
    expect(parser.hasSubmodules('foo')).toEqual(false);
    expect(parser.hasSubmodules('foo.')).toEqual(false);
    expect(parser.hasSubmodules('foo.bar')).toEqual(true);
    expect(parser.hasSubmodules('bar-bar')).toEqual(false);
    expect(parser.hasSubmodules('bar_dome')).toEqual(false);
    expect(parser.hasSubmodules('1sf')).toEqual(false);
    expect(parser.hasSubmodules('mod.sub.subsub.subsubsub')).toEqual(true);
});

test("Test the parse() function", () => {
    expect(() => parser.parse('')).toThrow(InvalidModuleException);
    expect(parser.parse('foo')).toEqual(["foo"]);
    expect(parser.parse('foo.')).toEqual(["foo"]);
    expect(parser.parse('foo.bar')).toEqual(["foo", "bar"]);
    expect(parser.parse('foo-bar.bat')).toEqual(["foo-bar", "bat"]);
});

test("Test the root() function", () => {
    expect(() => parser.root('')).toThrow(InvalidModuleException);
    expect(parser.root('foo')).toEqual('foo');
    expect(parser.root('foo-')).toEqual('foo-');
    expect(parser.root('foo_')).toEqual('foo_');
    expect(parser.root('foo.')).toEqual('foo');
    expect(parser.root('foo_.')).toEqual('foo_');
    expect(parser.root('foo.bar')).toEqual('foo');
});

test('Test the submodules() command', () => {
    expect(() => parser.submodules('')).toThrow(InvalidModuleException);
    expect(parser.submodules('foo')).toEqual('');
    expect(parser.submodules('foo_')).toEqual('');
    expect(parser.submodules('foo.bar')).toEqual('bar');
    expect(parser.submodules('foo.bar.bar')).toEqual('bar.bar');
    expect(parser.submodules('1.2.3.4.5')).toEqual('2.3.4.5');
});