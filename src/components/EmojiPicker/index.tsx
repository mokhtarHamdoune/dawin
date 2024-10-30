import EmojiPicker, { EmojiStyle, PickerProps } from "emoji-picker-react";

export interface EmojiPickerProps extends PickerProps {}

const LocalEmojiPicker = (props: EmojiPickerProps) => {
  return (
    <div className="relative">
      <div className="absolute -left-[96%] z-10">
        <EmojiPicker emojiStyle={EmojiStyle.APPLE} {...props} />
      </div>
    </div>
  );
};

export default LocalEmojiPicker;
