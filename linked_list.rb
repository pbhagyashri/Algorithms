class Node
  attr_accessor :value, :next

  def initialize(value)
    @value = value
  end
end

class LinkedList
  attr_accessor :head

  def initialize(headNode = nil)
    @head = headNode
  end

  def insertHead(node)
    
    if !@head
      @head = node
    else
      node.next = @head
      @head = node
    end
  
  end

end