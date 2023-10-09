import OrderedList from "@tiptap/extension-ordered-list";

export default OrderedList.extend({
  name: "ordered_list",
  content: "list_item+",

  addAttributes() {
    return {
      start: {
        default: 1,
        // we are not using start attribute
        parseHTML: (element) => {
          return 1;
        },
      },
    };
  },

  addCommands() {
    return {
      toggleOrderedList:
        () =>
        ({ commands }) => {
          return commands.toggleList("ordered_list", "list_item");
        },
    };
  },
});
