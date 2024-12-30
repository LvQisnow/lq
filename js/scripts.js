// 打开模态框函数
function openModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    modal.style.display = 'block';
    modalImage.src = imageSrc;

    // 添加键盘事件监听器
    document.addEventListener('keydown', handleKeyDown);
}

// 关闭模态框函数
function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';

    // 移除键盘事件监听器
    document.removeEventListener('keydown', handleKeyDown);
}

// 键盘事件处理函数
function handleKeyDown(event) {
    if (event.key === 'Escape') { // 检测是否按下了 Esc 键
        closeModal();
    }
}
