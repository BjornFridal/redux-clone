import { useSelector } from './redux/useSelector';
import { Wrapper } from './Wrapper';

export default function ComponentB() {
  const { status, pokemon } = useSelector((state) => state);

  return (
    <Wrapper label="Component B">
      <article>
        {status === 'fetching' ? (
          <Status text={<em>Fetching...</em>} />
        ) : status === 'fetched' ? (
          <Status text={<strong>{pokemon.name}</strong>}>
            <img src={pokemon.image} />
          </Status>
        ) : (
          <Status text="No Pokémon" />
        )}
      </article>
    </Wrapper>
  );
}

const Status = ({ text, children }) => (
  <div style={{ margin: '10px auto' }}>
    <div
      style={{
        backgroundColor: '#dbc5e6',
        borderRadius: 10,
        height: 96,
        marginBottom: 10,
        width: 96
      }}
    >
      {children}
    </div>
    <p>{text}</p>
  </div>
);
