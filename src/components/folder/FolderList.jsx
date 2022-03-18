// import { mdiFolder, mdiDelete, mdiPencil } from "@mdi/js";
import React from 'react';
import FolderItem from './FolderItem';
import FileItem from './FileItem';
export default function ({ folderListArr, onFolderOpen }) {
  console.log(folderListArr);
  return folderListArr.length ? (
    <div className="grid  grid-cols-4 grid-flow-row place-content-start gap-8 bg-gray-100 bg-opacity-60 p-6 rounded-xl h-full mt-4   ">
      {folderListArr.map((item) =>
        item.isFolder ? (
          <FolderItem
            key={item.name}
            folderObj={item}
            onFolderOpen={onFolderOpen}
          />
        ) : (
          <FileItem key={item.name} folderObj={item} />
        )
      )}
    </div>
  ) : (
    <div className="grid grid-flow-row   grid-cols-4 place-content-start gap-2 bg-gray-100 bg-opacity-60 p-6 rounded-xl h-full mt-4">
      empty
    </div>
  );
}
