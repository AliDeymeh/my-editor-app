import { Node, mergeAttributes } from "@tiptap/core";

const FontSize = Node.create({
  name: "fontSize",

  defaultOptions: {
    types: ["textStyle"],
  },

  addOptions() {
    return {
      types: ["textStyle"],
    };
  },

  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontSize: {
            default: null,
            parseHTML: (element) => ({
              fontSize: element.style.fontSize,
            }),
            renderHTML: (attributes) => {
              if (!attributes.fontSize) {
                return {};
              }

              return {
                style: `font-size: ${attributes.fontSize}`,
              };
            },
          },
        },
      },
    ];
  },
});

export default FontSize;
