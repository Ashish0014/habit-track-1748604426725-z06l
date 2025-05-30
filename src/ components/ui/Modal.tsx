import React from 'react';
import { motion } from 'framer-motion';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  
	const modalVariants = {
		hidden: { opacity: 0 },
		visible: { opacity:1 }
	};
	
	return (
		<motion.div 
			className={`modal ${isOpen ? "open" : ""}`}
			variants={modalVariants}
			initial="hidden"
			animate={isOpen ? "visible" : "hidden"}
			exit="hidden"
		>
			<div className="modal-content">
				{children}
				<button onClick={onClose}>Close</button>
			</div>
		</motion.div>
	);
};

export default Modal;