// Detail Modal Model - State management for modal
const detailModalModel = {
  isOpen: false,
  type: null, // 'experience' or 'project'
  data: null,
  index: null,

  open(type, data, index) {
    this.isOpen = true;
    this.type = type;
    this.data = data;
    this.index = index;
  },

  close() {
    this.isOpen = false;
    this.type = null;
    this.data = null;
    this.index = null;
  },

  isModalOpen() {
    return this.isOpen;
  },

  getModalData() {
    return {
      isOpen: this.isOpen,
      type: this.type,
      data: this.data,
      index: this.index
    };
  }
};

export default detailModalModel;
