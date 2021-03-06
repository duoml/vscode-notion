import { Command } from '../CommandManager'
import NotionPanelManager from '../features/NotionPanelManager'

export class RefreshBookmarks implements Command {
  public readonly id = 'vscode-notion.reloadBookmarks'

  constructor(private readonly manager: NotionPanelManager) {}

  execute() {
    this.manager.refreshBookmarks()
  }
}
