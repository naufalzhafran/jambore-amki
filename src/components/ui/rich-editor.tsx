"use client";

import "@mdxeditor/editor/style.css";
import { FC } from "react";
import {
  MDXEditor,
  MDXEditorMethods,
  headingsPlugin,
  listsPlugin,
  toolbarPlugin,
  UndoRedo,
  BoldItalicUnderlineToggles,
  BlockTypeSelect,
  ListsToggle,
  MDXEditorProps,
} from "@mdxeditor/editor";

type EditorProps = {
  markdown: string;
  editorRef?: React.MutableRefObject<MDXEditorMethods | null>;
} & MDXEditorProps

/**
 * Extend this Component further with the necessary plugins or props you need.
 * proxying the ref is necessary. Next.js dynamically imported components don't support refs.
 */
const Editor: FC<EditorProps> = ({ markdown, editorRef, ...otherProps }) => {
  return (
    <MDXEditor
      className="border rounded"
      contentEditableClassName="rich-editor"
      ref={editorRef}
      markdown={markdown}
      plugins={[
        headingsPlugin(),
        listsPlugin(),
        toolbarPlugin({
          toolbarContents: () => (
            <>
              <UndoRedo />
              <BoldItalicUnderlineToggles />
              <BlockTypeSelect />
              <ListsToggle />
            </>
          ),
        }),
      ]}
      {...otherProps}
    />
  );
};

export default Editor;
