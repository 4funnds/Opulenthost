const useScrollDirection = () => {
  const [direction, setDirection] = useState("up");
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setDirection(current > lastScroll ? "down" : "up");
      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return direction;
};

export default useScrollDirection;
