import { ContainerInterface } from "../container/container.interface";

/**
 * BindingFactory
 * 
 * BindingFactory type.
 */

export type BindingFactory<T> = (container: ContainerInterface) => T;