import React, { useState } from 'react';
import rootFolderObject from './doingit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FolderList from './FolderList';
import Breadcrumb from './Breadcrumb';

export default function Main() {
  const [rootFolder, setRootFolder] = useState(rootFolderObject);
  const [currentFolderList, setCurrentFolderList] = useState(
    rootFolderObject.children
  );
  const [currentPath, setCurrentPath] = useState('');

  const onFolderOpen = (folderObj) => {
    setCurrentFolderList(folderObj.children);
    folderObj.name === 'root'
      ? setCurrentPath('')
      : setCurrentPath(folderObj.path + folderObj.name + '/');
  };

  return (
    <>
      <div className="flex flex-row  text-xl text-saas-accent space-x-2 font-semibold mt-2">
        <FontAwesomeIcon
          icon={'fa-home'}
          className="mt-1"
          onClick={() => {
            onFolderOpen(rootFolder);
          }}
        />
        <Breadcrumb
          pathUrl={currentPath}
          rootFolder={rootFolder}
          onCrumbClick={onFolderOpen}
        />
      </div>
      <div className="w-full border-2 mt-4"></div>
      <FolderList
        folderListArr={currentFolderList}
        onFolderOpen={onFolderOpen}
      />
    </>
  );
}
