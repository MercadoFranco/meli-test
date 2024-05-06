import "./styles.sass";

const SkeletonDetail = () => {
  return (
    <div className="white-panel skeleton-detail">
      <div className="skeleton-picture" />
      <div className="skeleton-content">
        <div className="skeleton-title" />
        <div className="skeleton-price" />
      </div>
    </div>
  );
};

export default SkeletonDetail;
