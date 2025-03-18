interface ValidatorOptions {
    minLength?: number,
}

type ValidatorDescriptor = {
    options: ValidatorOptions,
    abc(): void,
};

const transform = (param: string | number) =>
    typeof param === "string" ? param : param.toString();

function globalFunction({ options = {} }: ValidatorDescriptor) {
    const { minLength } = options;

    const x: ValidatorDescriptor = {}

    x.abc()

    /**
     * @description Validator
     * @param {string?} value - parameter description
     */
    const localFunction = (value: string) => {
        let isValid = value.length >= minLength ?? 3; // line comment
        /* Block comment */
        isValid = isValid && (/^\d.[A-F]+$/i).test(value);
        return {
            isValid,
        };
    };
}

interface ButtonProps {
    click(): void;
}

@defineElement("download-button")
class DownloadButton<T extends Record<string, string>> extends HTMLButtonElement {
    static STATIC_FIELD = `<span title="HTML injection">${globalVariable}</span>`;

    static get observedAttributes(): string[] {
        return ['data-test'];
    }

    #field = { prop: 1 };

    public method(props: T) {
        this.click();

        label:
            while (true) {
                break label;
            }
    }
}

enum EnumName {
    EnumMember,
}

module Test {
    declare function run(): void;
}

export const EXPORTED_VARIABLE = 1;
export function exportedFunction() {}
export class ExportedClass {}

const globalVariable = "chars\n\u11";
const templateLiteral: `Template ${string | number} type` = `Template ${globalVariable} type`;

#