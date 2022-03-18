import obj from '../../../demo.json';

/*export const mockFolder3 = Object.keys(obj).map((key, index) => (
   
     {
        name: "root",
        path: '',
        children: Object.keys(obj[key]._8k).map((year, index)=> (
            { name: obj[key]._8k[year],
                path: '_8k/',
                children: Object.keys(obj[key]._8k).map((file, index) => (
                    {
                        name: obj[key]._8k[year][file],
                        path: '_8k/' + obj[key]._8k[year],
                        children:[]
                    }
                ))
        )).concat(
        Object.keys(obj[key]._10k).map((year, index)=> (
            { name: obj[key]._10k[year],
                path: '_10k/',
                children: Object.keys(obj[key]._10k).map((file, index) => (
                    {
                        name: obj[key]._8k[year][file],
                        path: '_10k/' + obj[key]._10k[year],
                        children:[]
                    }
                ))
        )),
        Object.keys(obj[key]._10q).map((year, index)=> (
            { name: obj[key]._10q[year],
                path: '_10q/',
                children: Object.keys(obj[key]._10q).map((file, index) => (
                    {
                        name: obj[key]._8k[year][file],
                        path: '_10q/' + obj[key]._8k[year],
                        children:[]
                    }
                ))
        )))
    }
     console.log(Object.keys(obj[key]))
);
*/

export const mockFolder = [
  { folder1: [{ sub1: [{ postsub1: [] }, { postsub2: [] }] }, { sub2: [] }] },
  { folder2: [{ sub3: [] }] },
  { folder3: [] }
];

export const mockFolder2 = [
  {
    name: 'folder1',
    path: '',
    children: [
      {
        name: 'sub1',
        path: 'folder1/',
        children: [
          {
            name: 'postsub1',
            path: 'folder1/sub1/',
            children: []
          }
        ]
      },
      {
        name: 'sub3',
        path: 'folder1/',
        children: []
      }
    ]
  },
  {
    name: 'folder2',
    path: '',
    children: [
      {
        name: 'sub2',
        path: 'folder2/',
        children: []
      }
    ]
  },
  {
    name: 'folder3',
    path: '',
    children: []
  }
];

export const rootFolderObject = {
  name: 'root',
  path: '',
  children: mockFolder2,
  isFolder: true
};
