import _obj from '../../../demo.json';
// obj = require('./demo.json');

let obj = _obj[1459417];

function get_filings(obj, curPath) {
  let children = [];

  // console.log(obj.sec_filing)
  // obj[sec_filing].forEach(({ name, url }) =>
  for (let filing of obj.sec_filing) {
    // console.log(name, url);
    children.push({
      name: filing.name,
      path: `${curPath}`,
      children: null,
      isFolder: false,
      content: { url: filing.url }
    });
  }
  return children;
}

function get_year(obj, curPath) {
  let children = [];
  // console.log(Object.keys(obj));
  // Object.keys(obj).forEach((name) =>
  for (let name of Object.keys(obj)) {
    children.push({
      name: name,
      path: `${curPath}`,
      children: get_filings(obj[name], `${curPath}${name}/`),
      isFolder: true,
      content: null
    });
  }
  return children;
}

function get_forms(obj) {
  let children = [
    {
      name: '_10k',
      path: '',
      children: get_year(obj['_10k'], '_10k/'),
      isFolder: true,
      content: null
    },
    {
      name: '_10q',
      path: '',
      children: get_year(obj['_10q'], '_10q/'),
      isFolder: true,
      content: null
    }
  ];
  return children;
}

const rootFolder = {
  name: 'root',
  path: '',
  children: get_forms(obj),
  isFolder: true,
  content: null
};

export default rootFolder;
console.log(rootFolder);
