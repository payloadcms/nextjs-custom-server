import { Editor, Element } from 'slate';

interface HR extends Element {
  type: 'hr';
}

const withHR = (incomingEditor: Editor): Editor => {
  const editor = incomingEditor;
  const { isVoid } = editor;

  editor.isVoid = (element: HR) => (element.type === 'hr' ? true : isVoid(element));

  return editor;
};

export default withHR;