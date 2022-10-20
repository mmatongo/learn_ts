class TreeNode
    attr_accessor :val, :left, :right
    def initialize(val = 0, left = nil, right = nil)
        @val = val
        @left = left
        @right = right
    end
end

def find_target(root, k)
  hash = {}
  stack = [root]
  while !stack.empty?
    node = stack.pop
    return true if hash[k - node.val]
    hash[node.val] = true
    stack << node.left if node.left
    stack << node.right if node.right
  end
  false
end
