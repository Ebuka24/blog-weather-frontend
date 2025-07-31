// components/Editor.tsx
'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

type EditorProps = {
  content: string;
  onUpdate?: (value: string) => void;
};

export default function Editor({ content, onUpdate }: EditorProps) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: content || '',
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onUpdate?.(html);
    },
  });

  return (
    <div className="border p-4 rounded shadow-md">
      <EditorContent editor={editor} />
    </div>
  );
}
