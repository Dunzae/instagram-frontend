import classNames from "classnames";
export function mergeStyle(c1? : string, c2? : string) {
    return classNames(c1, c2);
}