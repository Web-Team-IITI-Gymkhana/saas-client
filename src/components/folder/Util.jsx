import { cloneDeep } from 'lodash';

export const findFolderListInGivenPath = (folderList, currentPath) => {
  const pathArr = currentPath.split('/');
  let tempFolderList = folderList.slice();
  for (let i = 0; i < pathArr.length - 1; i++) {
    for (let item of tempFolderList) {
      if (item.name === pathArr[i]) {
        tempFolderList = item.children.slice();
        continue;
      }
    }
  }
  return tempFolderList;
};

export const findFolderListInCurrentList = (foldername, foldersArr) => {
  for (let folder of foldersArr) {
    if (folder.name === foldername) return folder;
  }
  throw Error('No Such Folder');
};

export const constructFolderStructureV2 = (
  currentPath,
  folder,
  newFolderName = 'newfolder'
) => {
  let folderName;
  const pathArr = currentPath.split('/');
  console.log(pathArr);
  let childFolder = cloneDeep(folder);
  let newRootFolder = childFolder;
  for (let i = 0; i < pathArr.length - 1; i++) {
    folderName = pathArr[i];
    childFolder = findFolderListInCurrentList(folderName, childFolder).children;
  }

  const newFolderObj = Object.assign(
    {},
    {
      name: newFolderName,
      path: currentPath,
      children: new Array(0)
    }
  );
  childFolder.push(newFolderObj);

  return newRootFolder;
};

export const findChildFolderListInCurrentPath = (foldername, foldersArr) => {
  for (let folder of foldersArr) {
    if (folder[foldername]) return folder[foldername];
  }
  throw Error('No Such Folder');
};

export const constructFolderStructure = (
  currentPath,
  folder,
  newFolderName = 'newfolder'
) => {
  let folderName;
  const pathArr = currentPath.split('/');
  console.log(pathArr);
  let childFolder = cloneDeep(folder);
  let newRootFolder = childFolder;
  for (let i = 0; i < pathArr.length - 1; i++) {
    folderName = pathArr[i];
    childFolder = findChildFolderListInCurrentPath(folderName, childFolder);
  }

  const newFolderObj = Object.create({});
  newFolderObj[newFolderName] = new Array(0);
  childFolder.push(newFolderObj);

  console.log(childFolder);
  console.log(newRootFolder);

  return newRootFolder;
};
