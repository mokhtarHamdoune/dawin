import { NodeKey, SerializedTextNode, TextNode } from "lexical";

interface SerializedEmojiNode extends SerializedTextNode {
  unifiedID: string;
}

export class EmojiNode extends TextNode {
  __unifiedID: string;

  static getType(): string {
    return "emoji";
  }

  static clone(node: EmojiNode): EmojiNode {
    return new EmojiNode(node.__unifiedID, node.__key);
  }

  constructor(unifiedID: string, key?: NodeKey) {
    const unicodeEmoji = String.fromCodePoint(...unifiedID.split("-").map((v) => parseInt(v, 16)));
    super(unicodeEmoji, key);
    this.__unifiedID = unifiedID.toLocaleLowerCase();
  }

  static importJSON(serializedNode: SerializedEmojiNode): EmojiNode {
    return new EmojiNode(serializedNode.unifiedID);
  }

  exportJSON(): SerializedEmojiNode {
    return {
      ...super.exportJSON(),
      type: "emoji",
      unifiedID: this.__unifiedID,
    };
  }
}

// this allow me to hide the entity from the client
export function $createEmojiNode(unifiedID: string): TextNode {
  const node = new EmojiNode(unifiedID)
    // In token mode node can be navigated through character-by-character,
    // but are deleted as a single entity (not invdividually by character).
    // This also forces Lexical to create adjacent TextNode on user input instead of
    // modifying Emoji node as it now acts as immutable node.
    .setMode("token");

  return node;
}
