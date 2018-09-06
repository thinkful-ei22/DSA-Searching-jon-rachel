'use strict';

/* We discussed how to implement the DDS in a searching algorithm */

const BST = require('./bst');

const main = () => {
  let arr = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22];
  let tree = new BST();

  for (let n of arr) {
    tree.insert(n);
  }


  const preOrder = (tree) => {
    let newArr = [];

    if ((!tree.left) && (!tree.right)) {
      return [tree.key];
    }
    newArr = [tree.key, ...newArr];
    if (tree.left) {
      newArr = [...newArr, ...preOrder(tree.left)];
    }
    if (tree.right) {
      newArr = [...newArr, ...preOrder(tree.right)];
    }

    return newArr;
  };
  console.log(preOrder(tree));

  const inOrder = (tree) => {
    let newArr = [];

    if ((!tree.left) && (!tree.right)) {
      return [tree.key];
    }

    if (tree.left) {
      newArr = [...newArr, ...inOrder(tree.left)];
    }

    newArr = [...newArr, tree.key];

    if (tree.right) {
      newArr = [...newArr, ...inOrder(tree.right)];
    }

    return newArr;
  };
  console.log(inOrder(tree));

  const postOrder = (tree) => {
    let newArr = [];

    if ((!tree.left) && (!tree.right)) {
      return [tree.key];
    }

    if (tree.left) {
      newArr = [...newArr, ...postOrder(tree.left)];
    }


    if (tree.right) {
      newArr = [...newArr, ...postOrder(tree.right)];
    }
    newArr = [...newArr, tree.key];

    return newArr;
  };
  console.log(postOrder(tree));
};
main();
