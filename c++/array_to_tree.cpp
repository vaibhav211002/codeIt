#include <set>
#include <string>
#include <vector>
#include <iostream>

template <typename T>
class TreeNode {
public:
  TreeNode(const T &value) : value_(value)
  {}

  ~TreeNode() {
    for (auto child : children_)
      delete child;
    children_.clear();
  }

  T getValue() {
    return value_;
  }

  std::set<TreeNode *> getChildren() {
    return children_;
  }

  TreeNode *combine(TreeNode *node) {
    if (!node)
      return nullptr;

    auto result = isNested(value_, node->value_);

    if (result < 0)
      return node->combine(this);
    else if (result == 0)
      return nullptr;

    std::vector<TreeNode *> toRemove;

    for (auto child : children_) {
      auto parent = node->combine(child);
      if (!parent)
        continue;
      if (parent == child)
        return this;
      if (parent == node)
        toRemove.emplace_back(child);
    }

    for (auto childNode : toRemove)
      children_.erase(childNode);

    children_.insert(node);

    return this;
  }

protected:
  /**
   * \return  1 v2 is nested in v1
   * \return -1 v1 is nested in v2
   * \return  0
   */
  static int isNested(const T &v1, const T &v2) {
    throw std::logic_error("This type of node cannot be nested");
  }

private:
  T value_;
  std::set<TreeNode<T> *> children_;
};

using Node = TreeNode<std::string>;

// One has to provide a specialization for dezired nested type
template <>
int Node::isNested(const std::string &v1, const std::string &v2) {
  if (v1.find(v2) != v1.npos)
    return -1;
  if (v2.find(v1) != v2.npos)
    return 1;
  return 0;
}

void print(Node *node, long depth = 0) {
  if (!node)
    return;

  std::string tabulation(depth * 2, ' ');
  std::cout << tabulation << " - " << node->getValue() << std::endl;
  for (auto child : node->getChildren())
    print(child, depth + 1);
}

int main() {
  // arbitrary not symbolizing the root
  Node *head = new Node("/");

  std::vector<std::string> datas = {
      "/home/", "/usr/include/", "/home/acf/",
      "/usr/lib/SDL/", "/usr/", "/src/",
      "/home/acf/tree"};

  for (auto data : datas)
    head->combine(new Node(data));

  print(head);

  return 0;
}
