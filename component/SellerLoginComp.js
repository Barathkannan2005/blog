const SellerLoginComp = () => {
  return (
    <div style={{
      width: '320px',
      margin: '50px auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      textAlign: 'center'
    }}>
      <h2>Seller Login</h2>
      <form>
        <input type="text" placeholder="Seller ID" style={{ width: '100%', padding: '10px', margin: '10px 0' }} />
        <input type="password" placeholder="Password" style={{ width: '100%', padding: '10px', margin: '10px 0' }} />
        <button style={{ padding: '10px 20px', backgroundColor: '#0070f3', color: '#fff', borderRadius: '5px' }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default SellerLoginComp;