/* eslint-disable import/no-extraneous-dependencies */
import React, { useCallback } from 'react';
import { Transforms } from 'slate';
import { useSlate, ReactEditor } from 'slate-react';
import { ElementButton } from 'payload/components/rich-text';

const baseClass = 'rich-text-hr-button';

const insertHR = (editor) => {
  const text = { text: ' ' };
  const hr = {
    type: 'hr',
    children: [
      text,
    ],
  };

  const nodes = [hr, { children: [{ text: '' }] }];

  if (editor.blurSelection) {
    Transforms.select(editor, editor.blurSelection);
  }

  Transforms.insertNodes(editor, nodes);

  const currentPath = editor.selection.anchor.path[0];
  const newSelection = { anchor: { path: [currentPath + 1, 0], offset: 0 }, focus: { path: [currentPath + 1, 0], offset: 0 } };

  Transforms.select(editor, newSelection);
  ReactEditor.focus(editor);
};

const ToolbarButton: React.FC<{ path: string }> = () => {
  const editor = useSlate();

  const handleAddHR = useCallback(() => {
    insertHR(editor);
  }, [editor]);

  return (
    <ElementButton
      className={baseClass}
      format="hr"
      onClick={handleAddHR}
    >
      —
    </ElementButton>
  );
};

export default ToolbarButton;
