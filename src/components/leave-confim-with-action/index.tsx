import { Modal } from 'antd';

function hide() {
  Modal.destroyAll();
}
function show(onOk:() => void) {
  Modal.confirm({
    title: '即将离开页面',
    content: '未保存的信息将丢失，确定离开页面吗？',
    onOk: () => {
      onOk();
      hide();
    },
    onCancel: hide,
  });
}

/** 自定义的离开确认，比如表单变更但这时切换了页面tab而非路由 */
export const LeaveConfirmModal = {
  show,
  hide,
};
