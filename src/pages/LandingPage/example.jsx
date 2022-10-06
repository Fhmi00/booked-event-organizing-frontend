import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import axios from "../../utils/axios";

function Landing() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});
  const [page, setPage] = useState(1);

  // DIGUNAKAN UNTUK GET DATA PERTAMA KALI
  useEffect(() => {
    getDataProduct();
  }, []);

  // DIGUNAKAN KETIKA ADA PERUBAHAN STATE
  useEffect(() => {
    getDataProduct();
  }, [page]);

  const getDataProduct = async () => {
    try {
      const result = await axios.get(
        `product?searchName=&sort=&limit=3&page=${page}&searchDateCreated=`
      );
      setData(result.data.data);
      setPagination(result.data.pagination);
      // console.log(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDetailProduct = (id) => {
    navigate(`/detail/${id}`);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <>
      {/* START MAIN */}
      <main className="container d-flex gap-3">
        {data.length > 0 ? (
          data.map((item) => (
            <div key={item.id}>
              <Card data={item} handleDetail={handleDetailProduct} />
            </div>
          ))
        ) : (
          <div className="text-center">
            <h3>Data Not Found !</h3>
          </div>
        )}
      </main>
      <div className="d-flex gap-2 justify-content-center w-100 my-5">
        <button className="btn btn-primary" onClick={handlePrevPage}>
          &lt;
        </button>
        <button
          className="btn btn-primary"
          onClick={handleNextPage}
          disabled={page === pagination.totalPage ? true : false}
        >
          &gt;
        </button>
      </div>
      {/* END MAIN */}
    </>
  );
}

export default Landing;
