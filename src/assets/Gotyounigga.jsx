export const Gotyounigga = ({ data }) => {
  return (
    <>
      <div style={{ height: '100vh' }}>
        <h1>YOU ARE DONE FOR </h1>
        <p>{console.log(data)}</p>
        <div className='resultbox'>
          {Object.entries(data).map(([key, value]) => (
            <div key={key}>
              <p>
                <span style={{ fontStyle: 'italic' }}>{key}</span> :
                <span>{value}</span>
              </p>
            </div>
          ))}
        </div>

        <p>
          This data has been forwarded to the police, I know where you live.
          Have fun in prision
        </p>
      </div>
    </>
  )
}
