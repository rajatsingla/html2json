import { generateJSON } from '@tiptap/html'
import Code from "@tiptap/extension-code";
import Link from "@tiptap/extension-link";
import Blockquote from "@tiptap/extension-blockquote";
import Bold from "@tiptap/extension-bold";
import Heading from "@tiptap/extension-heading";
import Italic from "@tiptap/extension-italic";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Document from "@tiptap/extension-document";

import Image from "./schema/image.js";
import Embed from "./schema/embed.js";
import HR from "./schema/hr.js";
import HB from "./schema/hb.js";
import ListItem from "./schema/listItem.js";
import OrderedList from "./schema/orderedlist.js";
import CodeBlock from "./schema/codeblock.js";
import FeaturedImage from "./schema/featuredimage.js";

export const convert = (html) => {
    return generateJSON(html, [
    Document,
    Paragraph,
    Text,
    Bold,
    Link,
    Blockquote,
    Heading,
    Italic,
    Image,
    Code,
    Embed,
    HR,
    HB,
    ListItem,
    OrderedList,
    CodeBlock,
    FeaturedImage,
    
  ])
}
// const html = `<p>asdasd</p> <img src="google.com">`
// console.log(JSON.stringify( convert(html)))