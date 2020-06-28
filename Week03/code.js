// 从前序与中序遍历序列构造二叉树
var buildTree = function(preorder, inorder) {
    if(!preorder.length) return null
    const node = new TreeNode(preorder[0])
    const index = inorder.indexOf(preorder[0])
    const inLeft = inorder.slice(0, index)
    const inRight = inorder.slice(index + 1)
    const preLeft = preorder.slice(1, index + 1)
    const preRight = preorder.slice(index + 1)
    node.left = buildTree(preLeft, inLeft)
    node.right = buildTree(preRight, inRight)
    return node
};


// 二叉树的最近公共祖先
var lowestCommonAncestor = function(root, p, q) {
    if (root === null) return null
    if (root == p || root == q) return root;
    let left = lowestCommonAncestor(root.left, p , q)
    let right = lowestCommonAncestor(root.right, p , q)
    if (!left) return right;
    if (!right) return left;
    return root;
};