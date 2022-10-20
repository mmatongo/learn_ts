function findTarget(root: TreeNode | null, k: number): boolean {
    const set = new Set();
    const stack = [root];
    while (stack.length) {
        const node = stack.pop();
        if (!node) continue;
        if (set.has(k - node.val)) return true;
        set.add(node.val);
        stack.push(node.left, node.right);
    }
    return false;
};
