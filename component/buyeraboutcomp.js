const BuyerAboutComp = () => {
  return (
    <div style={{
      backgroundColor: '#b68b3dff',
      padding: '30px',
      border: '1px solid #ddd',
      borderRadius: '12px',
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '30px'
    }}>
      <div style={{ display: 'grid', gap: '10px' }}>
        <h2>About the Buyer</h2>
        <p>
          This section contains information about the buyer, preferences, and order history.
          You can customize it to include recent purchases, contact details, or loyalty status.
        </p>
        <ul style={{ textAlign: 'left', paddingLeft: '20px' }}>
          <li>Username: ani</li>
          <li>Membership: Gold</li>
          <li>Favorite Category: Organic Groceries</li>
          <li>Recent Orders: Apples, Milk, Bread</li>
        </ul>
      </div>

      <div style={{ display: 'grid', gap: '10px' }}>
        <h2>About the Company</h2>
        <p>
          This company is well developed. Many customers and employees contribute to a strong and growing ecosystem.
        </p>
      </div>

      <div style={{ display: 'grid', gap: '10px' }}>
        <h2>About the Website</h2>
        <p>
          This company has a website built for its customers. With its help, users can easily place orders online.
        </p>
      </div>
    </div>
  );
};

export default BuyerAboutComp;