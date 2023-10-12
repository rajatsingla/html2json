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

// let html = `<p><a href="http://www.tajmahalfoxtrot.com/wp-content/uploads/2014/02/2013-08-23-asha_press21.jpg" data-rel="penci-gallery-image-content" class="fancyboxforwp" data-fancybox="gallery"><img class="alignleft  wp-image-3238" src="http://www.tajmahalfoxtrot.com/wp-content/uploads/2014/02/2013-08-23-asha_press21.jpg" alt="2013-08-23-asha_press21" width="270" height="250" srcset="https://www.tajmahalfoxtrot.com/wp-content/uploads/2014/02/2013-08-23-asha_press21.jpg 450w, https://www.tajmahalfoxtrot.com/wp-content/uploads/2014/02/2013-08-23-asha_press21-300x278.jpg 300w" sizes="(max-width: 270px) 100vw, 270px"></a>Though she soon moved on to performing pop, her talent for presaging the moment continued to characterise her work. She was an early entrant on the glam rock scene and her self-titled debut album in 1973 was produced by Elton John’s associate Del Newman.&nbsp; Three years later, her third solo album, <i>The Devil is Loose</i>, was described by one critic as “a masterpiece of snakey, spaced-out soul and pre-mainstream disco”. She was among the first international recording artists to infuse Indian elements into her tunes, subtly embellishing her pop vocals with Hindustani music ornamentation. Yet, chances are, many listeners in the US and India know very little about Asha Puthli.</p>`
// console.log(JSON.stringify( convert(html)))