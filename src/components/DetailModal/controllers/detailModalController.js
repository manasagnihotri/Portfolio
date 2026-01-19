// Detail Modal Controller - Handles modal interactions
import detailModalModel from '../models/detailModalModel';

const detailModalController = {
  openModal(type, data, index) {
    detailModalModel.open(type, data, index);
  },

  closeModal() {
    detailModalModel.close();
  },

  getModalState() {
    return detailModalModel.getModalData();
  }
};

export default detailModalController;
