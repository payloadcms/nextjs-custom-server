// eslint-disable-next-line import/no-extraneous-dependencies
import { Editor } from 'slate';

const withHR = (incomingEditor: Editor): Editor => {
  const editor = incomingEditor;
  const { isVoid } = editor;

  editor.isVoid = (element) => (element.type === 'hr' ? true : isVoid(element));

  return editor;
};

export default withHR;
