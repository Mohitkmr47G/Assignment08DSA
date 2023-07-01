var tree2str = function(root) {    
    result = ''    
    helper (root)  

    function helper (node) {
        if (node == null) return 
        if (node != root) result += '('  
        result += node.val
        if (node.left == null && node.right != null)  result += '()'        
        helper (node.left)
        helper (node.right)
        if (node != root) result += ')'
    }
    
    return result
};
