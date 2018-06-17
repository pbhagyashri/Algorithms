class Node
  attr_accessor :value, :next

  def initialize(value)
    @value = value
  end
end

class LinkedList
  attr_accessor :head

  #Initialize with a head node
  def initialize(headNode = nil)
    @head = headNode
  end

  #insert head node or attach next node
  def insertHead(node)
    
    if !@head
      @head = node
    else
      node.next = @head
      @head = node
    end
  
  end

end