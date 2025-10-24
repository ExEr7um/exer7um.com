import {
  NodeTypes,
  type RootNode,
  type TemplateChildNode,
} from "@vue/compiler-core"

/**
 * Трансформатор для удаления атрибута `data-testid` из дерева виртуального DOM.
 *
 * @param node - Нода дерева
 */
export default function (node: RootNode | TemplateChildNode) {
  if (node.type === NodeTypes.ELEMENT) {
    node.props = node.props.filter((prop) =>
      prop.type === NodeTypes.ATTRIBUTE ? prop.name !== "data-testid" : true,
    )
  }
}
