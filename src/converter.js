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

import { moveInlineImagesToBlockLevel } from './utils/index.js';

export const convert = (html) => {
    html = moveInlineImagesToBlockLevel(html);
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

// let html = `<picture><source type="image/avif" srcset="https://files.smashing.media/workshops/brad-frost-workshop.avif"></source><img src="https://files.smashing.media/partners/smashing/brad-frost.png" loading="lazy" width="300" height="250" alt="Boost your skills online, with our friendly online workshops on front-end and design."></picture>`
// console.log(JSON.stringify( convert(html)))