import { types } from 'mobx-state-tree';
import { systemTreeIds } from '../shared';

export const PageHeaderNode = types
    .model(systemTreeIds.pageHeaderNode, {
        id: types.optional(types.identifier, systemTreeIds.pageHeaderNode),
        projectName: types.string,
    })
    .actions((self) => {
        const changeProjectName = (val: any) => {
            self.projectName = val;
            console.log(self.projectName);
        };
        // 添加项目
        const addProject = () => {
            console.log('addProject');
        };
        // 打开项目
        const openProject = () => {
            console.log('openProject');
        };
        // 保存项目
        const saveProject = () => {
            console.log('saveProject');
        };
        return {
            changeProjectName,
            addProject,
            openProject,
            saveProject,
        };
    });
