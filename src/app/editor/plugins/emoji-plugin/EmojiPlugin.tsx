// This plugin inspired from the example given in Creating Pluing example
// provided in Lexical Gettings Started
// https://lexical.dev/docs/getting-started/creating-plugin

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { TextNode, Transform } from 'lexical';
import { mergeRegister } from '@lexical/utils';
import { useEffect } from 'react';
import { findEmoji } from './utils';
import { $createEmojiNode } from '../../nodes';

const emojiTransform: Transform<TextNode> = (node) => {
  if (!node.isSimpleText() || node.hasFormat('code')) {
    return;
  }

  const text = node.getTextContent();

  const match = findEmoji(text);
  if (match === null) {
    return null;
  }
  let targetNode: TextNode | null = null;
  let rest: any;
  if (match.position === 0) {
    // const result = node.splitText(match.shortcode.length);
    [targetNode] = node.splitText(match.position + match.shortcode.length);
    // console.log(result);
  } else {
    [, targetNode] = node.splitText(match.position, match.position + match.shortcode.length);
  }
  const emoji = $createEmojiNode(match.unifiedID);
  targetNode.replace(emoji);
};

export function EmojiPlugin() {
  const [editor] = useLexicalComposerContext();
  useEffect(() => {
    return mergeRegister(editor.registerNodeTransform(TextNode, emojiTransform));
  }, [editor]);
  return null;
}
