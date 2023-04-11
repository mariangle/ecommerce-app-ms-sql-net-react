export const useStatusString = () => {
    return (status) => {
      const statusMap = {
        0: { statusString: 'Pending', className: 'yellow' },
        1: { statusString: 'Processing', className: 'green' },
        3: { statusString: 'Shipped', className: 'green' },
        4: { statusString: 'Delivered', className: 'green' },
        5: { statusString: 'Cancelled', className: 'red' }
      };
      const statusObj = statusMap[status] ?? { statusString: '', className: '' };
      return <p className={`txt ${statusObj.className}`}>{statusObj.statusString}</p>;
    };
  };