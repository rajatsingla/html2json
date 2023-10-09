import ListItem from "@tiptap/extension-list-item";

export default ListItem.extend({
  name: "list_item",

  content: 'block*',

  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.type),
      Tab: () => this.editor.commands.sinkListItem(this.type),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.type),
    };
  },
});
