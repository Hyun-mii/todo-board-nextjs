'use client'
import { useRouter } from "next/navigation";
import './table.css';
import '../homepage.css';

export default function Table () {
    const router = useRouter();

    const headers = [ '번호', '제목', '글쓴이', '등록일'];
    const items = [
        { num: 1, title: '제목 1', writer: '이름 1', date: '2024-09-01' },
        { num: 2, title: '제목 2', writer: '이름 2', date: '2024-10-01' },
        { num: 3, title: '제목 3', writer: '이름 3', date: '2024-11-01' },
        { num: 4, title: '제목 4', writer: '이름 4', date: '2024-12-01' }
    ];
    return (
        <div>
            <div className='homeTitle'>
                <button 
                  type='button' 
                  onClick={() => router.push("/")}
                >
                    Home Page
                </button>
            </div>
            <h2 className='tableTitle'>게시판</h2>
            <div >
             <table className='container'>

                <thead > 
                    <tr className='header'>
                    {headers.map((h,i) => (
                            <th key = {i}> {h} </th>
                       
                    ))}
                    </tr>
                </thead>
                <tbody>
                    {items.map((d, i) => (
                            <tr key={i} className='item'>
                                <td>{d.num}</td>
                                <td>{d.title}</td>
                                <td>{d.writer}</td>
                                <td>{d.date}</td>
                            </tr>
                        ))}
                        </tbody>
              </table>
            </div>
        </div>
    );
}
