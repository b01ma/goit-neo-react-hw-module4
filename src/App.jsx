import { useState, useEffect, useRef, useCallback } from "react";
import toast, { Toaster } from "react-hot-toast";

import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";
import { fetchImages } from "./api/unsplash";

import styles from "./App.module.css";

export default function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const observerRef = useRef(null);
  const loadMoreRef = useRef(null);

  useEffect(() => {
    if (query === "") {
      return;
    }

    const loadImages = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await fetchImages(query, page);

        if (data.results.length === 0) {
          toast.error("No images found for your search");
          setError("No images found for your search");
          return;
        }

        if (page === 1) {
          setImages(data.results);
        } else {
          setImages((prev) => [...prev, ...data.results]);
        }

        setTotalPages(data.totalPages);
      } catch (err) {
        setError(err.message);
        toast.error(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, [query, page]);

  const handleSearchSubmit = (searchQuery) => {
    if (searchQuery === query) {
      return;
    }
    setQuery(searchQuery);
    setPage(1);
    setImages([]);
    setError(null);
  };

  const handleLoadMore = useCallback(() => {
    if (page < totalPages && !loading) {
      setPage((prev) => prev + 1);
    }
  }, [page, totalPages, loading]);

  useEffect(() => {
    if (!loadMoreRef.current || !images.length || page >= totalPages) {
      return;
    }

    const observer = new IntersectionObserver(
		
      (entries) => {
		console.log('entries', entries);
        if (entries[0].isIntersecting && !loading && page < totalPages) {
          handleLoadMore();
        }
      },
      { threshold: 0.1 }
    );

	console.log('observer', observer);

    observer.observe(loadMoreRef.current);
    observerRef.current = observer;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [images, loading, page, totalPages, handleLoadMore]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className={styles.container}>
      <Toaster />
      <SearchBar onSubmit={handleSearchSubmit} />

      {error && !images.length && <ErrorMessage message={error} />}

      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={handleImageClick} />
      )}

      {loading && <Loader />}

      {images.length > 0 && page < totalPages && (
        <div ref={loadMoreRef} style={{ height: "20px" }} />
      )}

      <ImageModal isOpen={modalIsOpen} image={selectedImage} onClose={closeModal} />
    </div>
  );
}
