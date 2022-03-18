import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { findFolderListInCurrentList } from './Util';

export default function ({ pathUrl, rootFolder, onCrumbClick }) {
  //  console.log(pathUrl)
  const pathArr = pathUrl.split('/');
  pathArr.splice(pathArr.length - 1, 1);
  let tempObj;
  let tempFolder = rootFolder.children.slice();
  //console.log(pathArr);
  return !pathArr.length ? null : (
    <div className="  flex flex-row space-x-2 items-center text-md font-semibold">
      <div className="bread-crumb-list flex flex-row space-x-2 items-center">
        {pathArr.map((name) => {
          tempObj = findFolderListInCurrentList(name, tempFolder);
          tempFolder = tempObj.children.slice();
          return (
            <div className="  flex flex-row space-x-2 " key={name}>
              <BreadcrumbItem folderObj={tempObj} onCrumbClick={onCrumbClick} />
              <span className="arrow-right">&gt;</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const BreadcrumbItem = function ({ folderObj, onCrumbClick }) {
  return (
    <span
      className="folder-name"
      onClick={() => {
        onCrumbClick(folderObj);
      }}
    >
      {folderObj.name}
    </span>
  );
};
