import "./styles.sass";

const SkeletonResult = () => {
  return (
    <div className="white-panel skeleton-result">
      <ol>
        <SkeletonItem />
        <span className="divider" />
        <SkeletonItem />
        <span className="divider" />
        <SkeletonItem />
        <span className="divider" />
        <SkeletonItem />
      </ol>
    </div>
  );
};

const SkeletonItem = () => {
  return (
    <li className="skeleton-item">
      <div className="skeleton-image" />
      <div className="skeleton-content">
        <span className="skeleton-price" />
        <span className="skeleton-title" />
      </div>
    </li>
  );
};

export default SkeletonResult;
