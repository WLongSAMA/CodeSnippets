<template>
  <div class="action">
    <UniconsSearch />
    <input placeholder="Search...">
    <AppActionButton
      class="add"
      @click="onAddNewSnippet"
    >
      <UniconsPlus />
    </AppActionButton>
  </div>
</template>

<script setup lang="ts">
import { useFolderStore } from '@/store/folders'
import { useSnippetStore } from '@/store/snippets'

const snippetStore = useSnippetStore()
const folderStore = useFolderStore()

const onAddNewSnippet = async () => {
  if (folderStore.selectedAlias !== undefined) return

  await snippetStore.addNewSnippet()
  await snippetStore.getSnippetsByFolderIds(folderStore.selectedIds)
  await snippetStore.getSnippets()
}
</script>

<style lang="scss" scoped>
.action {
  display: flex;
  align-items: center;
  padding: var(--spacing-sm);
  input {
    outline: none;
    border: none;
    width: 100%;
    padding: 0 var(--spacing-xs);
  }
  :deep(svg) {
    flex-shrink: 0;
  }
  .add {
    position: relative;
    right: -8px;
  }
}
</style>