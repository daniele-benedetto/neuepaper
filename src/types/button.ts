import type IconType from './icon';

export default interface button {
    id?: string;
    text: string;
    icon?: IconType;
    classes?: string;
}